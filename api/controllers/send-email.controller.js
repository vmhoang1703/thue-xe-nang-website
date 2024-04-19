const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
	try {
		const { name, email, companyName, phoneNumber, requirement } = req.body;

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: `${email}`,
			subject: 'New consultation request',
			html: `
                <p>Kính gửi ${companyName},</p>
                <p>Chúng tôi xin gửi lời cảm ơn chân thành nhất đến Quý công ty đã gửi yêu cầu tư vấn cho chúng tôi.</p>
                <p>Thông tin chi tiết về yêu cầu như sau:</p>
                <ul>
                <li><strong>Họ và tên:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Số điện thoại:</strong> ${phoneNumber}</li>
                <li><strong>Yêu cầu:</strong> ${requirement}</li>
                </ul>
                <p>Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất để cung cấp thông tin và giải pháp phù hợp nhất.</p>
                <p>Một lần nữa, chúng tôi chân thành cảm ơn sự quan tâm và tin tưởng của ${companyName} đối với dịch vụ của chúng tôi.</p>
                <p>Trân trọng,</p>
                <p>Tên người gửi ...</p>
                <p>Chức vụ ...</p>
                <p>Công ty TNHH Long Anh Phát</p>
		`,
		});

		res.status(200).json({ message: 'Email sent successfully' });
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
};

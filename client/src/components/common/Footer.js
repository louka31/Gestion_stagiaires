const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (<center>
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Moussa Malak{" "}
			<a href={link} target={target}>
			</a>
		</div>
		</center>
	);
};

export default Footer;

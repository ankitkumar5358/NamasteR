const Footer = () => {
  const cumStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color : 'white',
    backGround : 'green'
  };
  return (
    <>
    <div>
    <h3 className="header" style={cumStyle}> Copyright @ 2023 Reserved </h3>
    </div>
    </>
  )
};

export default Footer;

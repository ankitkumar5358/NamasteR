import React, { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='text-center border border-black py-2 px-2'>
      <h3>{title}</h3>
      {isVisible ?
        <button onClick={() => setIsVisible(false)} className="rounded hover:rounded-lg">Hide</button>
        :
        <button onClick={() => setIsVisible(true)} className="rounded hover:rounded-lg">Show</button>
      }
      {isVisible && <p> {description} </p>}
    </div>
  )
}

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState( <Section/>);
  return (
    <div>
      <h1 className='text-3xl p-2 m-2 font-bold'> Instamart </h1>
      <Section
        title={"About Instamart"}
        description={"Everything you need gets delivered in minutes with Swiggy Instamart. Order now. Order fruits, veggies, milk, munchies & more online from Swiggy Instamart. Great deals. Safe packing. Door Step Delivery. Instant delivery. Fresh Products. "}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about") }
      />
      <Section
        title={"Team Instamart"}
        description={"This is team  instamart page. Team has 100+ members. Everything you need gets delivered in minutes with Swiggy Instamart. Order now. Order fruits, veggies, milk, munchies & more online from Swiggy Instamart. Great deals. Safe packing. Door Step Delivery. Instant delivery. Fresh Products."}
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team") }
      />
      <Section
        title={"Career Instamart"}
        description={"This is career  instamart page. Team has 100+ members. Everything you need gets delivered in minutes with Swiggy Instamart. Order now. Order fruits, veggies, milk, munchies & more online from Swiggy Instamart. Great deals. Safe packing. Door Step Delivery. Instant delivery. Fresh Products."}
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career") }
      />
      {/* <AboutInstaMart/>
    <DetailsOfInstaMart/>
    <TeamInstaMart/>
    <Product/>
    <Careers/>  */}
    </div>
  );
};

export default Instamart
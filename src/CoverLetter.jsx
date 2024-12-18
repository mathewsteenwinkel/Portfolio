import React from "react";
import "./css/CoverLetter.css"

const CoverLetter = () => {
  return (
    <>
      <div className="bodyCL">

        <h2 className="titleCL">  Where I aspire to work</h2>
        <p className="coverletterbody"> Since coming off of working for a marketing firm (Carmella Marking),
          I have learned that there is so much more I want to be and so much more to learn.
          During my time as a Wordpress developer I learned the basics of SEO, graphic design
          and working within a marketing agency. I've learned the importance of mobile first design
          and development for optimal speed and google ranking. I have also learned that sometimes the
          client doesnt know exactly what they want and you have to show them what is possible.
        </p>
        <p className="coverletterbody">
          {/* I believe I would be a great fit for Critical Mass because I strongly align with your company core value 
          of designning meaningful experiences and a focus on the customer.*/} I believe in getting the work completed in a timely manner,
          to the best quality possible, and creating that wow factor that keeps them coming back. I love to work collaboratively
          on problems with co-workers and clients and love the satisfaction of solving a difficult problem.
        </p>

      </div>
    </>
  )
};

export default CoverLetter;
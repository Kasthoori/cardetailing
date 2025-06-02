import { FC } from "react";
import { 
  container,
  heading,
  contentWrapper,
  textSection,
  subHeading, 
  paragraph,
  button,
  imageSection
} from "./AboutUs.styles";
import sideImage from "/src/assets/sideCarImage.jpg";
const AboutUsComponent:FC = () => {
  return (
    <section 
      className={container}
      style={{ backgroundImage: `url('\src\assets\drawing.png')` }}
      >
        <h2 className={heading}>Our Passionate Team Story</h2>
        <div className={contentWrapper}>
          <div className={textSection}>
            <h3 className={subHeading}>Who We Are</h3>
            <p className={paragraph}>
              Revive Auto Detailing, located in Henderson Auckland, New Zealand, is your go-to destination
              for top-notch auto detailing services for both car owners and dealerships. Our comitment
              to excellence is reflected in the quality of our work, the transparency in our pricing, and the satisfaction
              of our customers. We strive for perfection in overy detail, ensuring your vehicle leaves our care looking
              and feeling its absolute best.
            </p>
            {/* <button  className={button}>Meet the Team</button> */}
          </div>
          <div className={imageSection}>
            <img
              src={sideImage}
              alt="Luxury Car"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

        </div>
      </section>
  );
} 

export default AboutUsComponent;
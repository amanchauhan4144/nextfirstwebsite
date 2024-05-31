// pages/about.js

import stylesabout from "@/styles/about.module.css";
export default function About() {
  return (
    <div className={stylesabout.aboutpagecontainer}>
      <h1 className={stylesabout.headingabout}>About Page</h1>
      <div className={stylesabout.lower}>
        <div>
          <img className={stylesabout.image} src="/himountains.jpg"></img>
        </div>
        <div>
          <div className={stylesabout.headinglower}>Friday at 5 pm </div>
          <div>
            Racism is discrimination and prejudice against people based on their
            race or ethnicity. Racism can be present in social actions,
            practices, or political systems (e.g. apartheid) that support the
            expression of prejudice or aversion in discriminatory practices. The
            ideology underlying racist practices often assumes that humans can
            be subdivided into distinct groups that are different in their
            social behavior and innate capacities and that can be ranked as
            inferior or superior. Racist ideology can become manifest in many
            aspects ies (formal
            equality) or based on equality of outcomes for different races or
            ethnicities, also called substantive equality.[1]
          </div>
        </div>
      </div>
    </div>
  );
}

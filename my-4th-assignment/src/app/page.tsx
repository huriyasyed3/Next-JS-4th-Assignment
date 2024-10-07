  import React from "react";
import Card from "./Components/card";

export default function Home() {
  return (
    <>
      {/* Flexbox with responsive wrapping */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        <Card
          name="Huriya"
          age={20}
          rollno={749349}
          class="GIAIC"
        />
        <Card
          name="Areeba"
          age={19}
          rollno={389527}
          class="GIAIC"
        />
        <Card
          name="Navaira"
          age={21}
          rollno={924794}
          class="GIAIC"
        />
      </div>
    </>
  );
}

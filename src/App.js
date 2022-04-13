import React, { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Route from "./components/Route";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value:"red"
  },
  {
    label: "The Color Green",
    value:"green"
  },
  {
    label: "A Shade of Blue",
    value:"blue"
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};

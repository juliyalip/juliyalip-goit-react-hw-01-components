import React from "react";
import PropTypes from "prop-types";

import Stats from "./Stats";
import s from "./statistics.module.css";

function Statistics({ title, stats }) {
  if (stats === 0) return null;
  return (
    <section className={s.statistics}>
      {" "}
      {title && <h2 className={s.title}>{title} </h2>}
      <ul className={s.list}>
        {stats.map((stat) => (
          <li key={stat.id} className={s.item}>
            <Stats label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};

export default Statistics;

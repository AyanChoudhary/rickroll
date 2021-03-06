/* eslint-disable react/prop-types */
import React from "react";
import { Skeleton, Card, Switch } from "antd";
import "styles/main.scss";

const { Meta } = Card;

const OneTimeCard = ({ activity, onChange }) => {
  const onCheck = (checked) => {
    onChange(activity._id, checked);
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Skeleton loading={false} avatar active>
        <Meta title={activity.title} description={activity.description} />
      </Skeleton>
      <Switch className="switch" defaultChecked={false} onChange={onCheck} />
      <p style={{ marginTop: 24 }}>
        Applicable Days:{" "}
        {activity.days
          ? activity.days.map((day, index) => (
              <span style={{ fontWeight: "lighter" }} key={index}>
                {index != activity.days.length - 1 ? `${day},` : `${day}`}
              </span>
            ))
          : null}
      </p>
      <p>
        Time of occurrence:{" "}
        <span style={{ fontWeight: "lighter" }}>{activity.time}</span>
      </p>
    </Card>
  );
};

export default OneTimeCard;

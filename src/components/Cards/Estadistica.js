import React from "react";
import InfoCard from "../Cards/InfoCard";
import { PeopleIcon, MoneyIcon, CartIcon, ChatIcon } from "../../icons";
import RoundIcon from "../RoundIcon";

const Estadistica = (props) => {
  const { user, usuario, isAuthenticated, loading } = props;
  return (
    <>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Trabajo" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Usuario" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Solicitud Enviado" value="376">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
    </>
  );
};

export default Estadistica;

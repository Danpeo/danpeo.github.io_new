import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface StatefulLinkProps {
  to: string;
  activeClassName: string;
  inactiveClassName: string;
  commonClassName: string;
  exact: boolean;
  children: ReactNode;
}

export const StatefulLink = ({
  to,
  activeClassName,
  inactiveClassName,
  commonClassName,
  exact,
  children,
}: StatefulLinkProps) => {
  const location = useLocation();
  const isTo = location.pathname === to;
  const isActive = isTo || (exact && isTo);
  const className = `${commonClassName} ${isActive ? activeClassName : inactiveClassName}`;
  return (
    <>
      <a href={to} className={className}>
        {children}
      </a>
    </>
  );
};

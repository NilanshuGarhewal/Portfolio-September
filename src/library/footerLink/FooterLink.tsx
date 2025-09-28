import React from "react";
import Link from "next/link";

type FooterLinkProps = {
  name: string;
  href: string;
};

const FooterLink = ({ name, href }: FooterLinkProps) => {
  return (
    <Link href={href} className="footer-link">
      <span className="link-name">{name}</span>
      <span className="link-name-underline">{name}</span>
    </Link>
  );
};

export default FooterLink;

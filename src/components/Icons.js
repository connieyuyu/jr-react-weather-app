import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

export const twitterIcon = (
  <FontAwesomeIcon icon={faTwitter} className="twitterIcon" />
);
export const userIcon = (
  <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
);
export const burgerMenuIcon = (
  <FontAwesomeIcon icon={faBars} className="burgerMenuIcon" />
);


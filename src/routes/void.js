/*
 * send information about next void
 */

import rpgEvent from '../core/RpgEvent';

export default (req, res) => {
  res.set({
    'Cache-Control': `public, max-age=${5 * 60}`,
  });

  if (rpgEvent.eventTimestamp) {
    const currentTime = new Date();
    const eventTime = new Date(rpgEvent.eventTimestamp);
    const timeDifference = Math.max(0, eventTime - currentTime);

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timeUntilEvent = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    res.send(`Time until next void: ${timeUntilEvent}`);
  } else {
    res.send('No void');
  }
};

import { Avatar, Tooltip } from 'antd';
import { Link } from 'react-router';
import type { Application } from '../api';
import { useLang } from '../lib/lang';
import { applicationPath } from '../lib/links';

const ApplicationAvatars = ({ applications, size = 24 }: { applications: Application[]; size?: number }) => {
  const { l } = useLang();
  return (
    <Avatar.Group size={size} max={{ count: 5 }}>
      {applications.map((app) => (
        <Tooltip key={app.id} title={l(app.name)}>
          <Link to={applicationPath(app.slug)}>
            <Avatar src={app.thumbnail ?? undefined} alt={l(app.name)}>
              {l(app.name).charAt(0)}
            </Avatar>
          </Link>
        </Tooltip>
      ))}
    </Avatar.Group>
  );
};

export default ApplicationAvatars;

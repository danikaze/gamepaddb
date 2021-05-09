import { Page } from '@components/page';
import { Index, Props } from '@components/pages/index';
import { AppPage } from './_app';

const IndexPage: AppPage<Props> = (props) => {
  return (
    <Page
      title="GamePad DB"
      description="Information about pressed buttons and used axis of the connected GamePads"
    >
      <Index {...props} />
    </Page>
  );
};

export default IndexPage;

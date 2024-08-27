import { defaultMetadata } from "@/utils/contants";
import Head from "next/head";

interface MetaHeadProps {
  title?: string;
  description?: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaHead;

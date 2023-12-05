import { createClient }from "@sanity/client"

const client = createClient({
  projectId: "9k80lwl3",
  dataset: "production",
  useCdn: true,
});

export default client

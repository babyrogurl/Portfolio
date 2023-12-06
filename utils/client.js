import { createClient }from "@sanity/client"

const client = createClient({
  projectId: "45888f4t",
  dataset: "production",
  useCdn: true,
});

export default client

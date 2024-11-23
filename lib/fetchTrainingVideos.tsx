import { client } from "@/app/lib/sanity";
export default async function fetchTrainingVideos() {
    const query = `*[_type == "trainingVideo"] {
      _id,
        title,
        videoUrl,
        description
    }`;
    const data = await client.fetch(query);
  
    return data;
  }
import { useFetchVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

export default function Videos() {
  const { data: videos, isError, isLoading } = useFetchVideosQuery();

  let element;

  if (isLoading) {
    element = (
      <>
        <VideoLoader /> <VideoLoader /> <VideoLoader /> <VideoLoader />
        <VideoLoader /> <VideoLoader />
      </>
    );
  }
  if (isError) {
    element = <Error />;
  }
  if (!isError && !isLoading && videos?.length === 0) {
    element = <h1>NO VIDEOS FOUND</h1>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    element = videos.map((video) => <Video key={video.id} {...video} />);
  }

  return element;
}

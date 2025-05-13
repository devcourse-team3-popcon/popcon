import {ListMusic, Pause, Play, Trash2} from "lucide-react";
import {usePlaylistStore} from "../../../../stores/playlistStore";
import {deleteTrackFromPlaylist} from "../../../../apis/playlist/playlistService";
import {useAddTrackToPlaylist} from "../../hooks/useAddTrackToPlaylist";
import {useState} from "react";
import {searchYoutubeVideo} from "../../../../apis/youtube/youtubeSearch";

export default function PlaylistTrackItem({
  track,
  onClick,
  item,
  showEllipsis,
  trackId,
  other,
  currentVideo,
  setCurrentVideo,
}: PlaylistTrackItemProps) {
  const {setTracks} = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);
  const handleTrackClick = useAddTrackToPlaylist();
  const [videoId, setVideoId] = useState<string | null>(null);

  const deleteTrack = async (e: React.MouseEvent<SVGSVGElement>, trackId: string) => {
    e.stopPropagation();
    await deleteTrackFromPlaylist(trackId);
    const updatedTracks = tracks.filter((track) => track._id !== trackId);
    setTracks(updatedTracks);
  };

  const imageUrl = track?.album.images[0]?.url ?? item?.title.imgUrl ?? "";
  const imageAlt = track ? `${track.name} 앨범 사진` : "앨범 사진";

  const trackName = track?.name ?? item?.title.name ?? "";
  const artistName = track?.artists[0]?.name ?? item?.title.artist ?? "";

  const handleListMusicClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (track) {
      handleTrackClick(track);
    } else if (item) {
      handleTrackClick({
        name: item.title.name,
        artist: item.title.artist,
        imgUrl: item.title.imgUrl,
      });
    }
  };

  let isPlaying = false;

  if (item) {
    isPlaying = currentVideo?.postId === item?._id && currentVideo?.videoId === videoId;
  } else if (track) {
    isPlaying = currentVideo?.postId === track.id && currentVideo?.videoId === videoId;
  }

  const togglePlayTrack = async () => {
    if (isPlaying) {
      setCurrentVideo(null);
      setVideoId(null);
      return;
    }

    let query = "";
    let postId = "";

    if (item) {
      query = `${item.title.artist} - ${item.title.name} official audio topic`;
      postId = item._id;
    } else if (track) {
      query = `${track.artists[0]?.name || track.artists} - ${track.name} official audio topic`;
      postId = track.id;
    }

    if (!query || !postId) {
      return;
    }

    const foundVideoId = await searchYoutubeVideo(query);

    if (foundVideoId) {
      setVideoId(foundVideoId);
      setCurrentVideo({postId: postId as string, videoId: foundVideoId});
    }
  };

  return (
    <div className='flex h-auto p-[18px] justify-between items-center hover:bg-[color:var(--grey-500)] rounded-[10px] group cursor-pointer'>
      <div className='flex gap-[24px] items-center flex-1 overflow-hidden'>
        <div className='flex rounded-[10px] justify-center items-center relative group overflow-hidden'>
          <img
            src={imageUrl}
            alt={imageAlt}
            className='w-15 h-15 flex-shrink-0'
            onClick={togglePlayTrack}
          />
          <div
            className={`absolute flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bg-black/50 w-full h-full z-10 ${
              isPlaying ? "opacity-100 bg-black/50" : ""
            }`}
          >
            {isPlaying ? (
              <Pause onClick={togglePlayTrack} className='z-50' />
            ) : (
              <Play onClick={togglePlayTrack} className='z-50' />
            )}
          </div>
          {isPlaying && currentVideo?.videoId && (
            <iframe
              className='w-0 h-0 hidden'
              src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0`}
              allow='autoplay'
              allowFullScreen
            />
          )}
        </div>
        <div className='overflow-hidden' onClick={() => onClick && track && onClick(track)}>
          <p className='text-[18px] text-[color:var(--white)] font-bold truncate'>{trackName}</p>
          <p className='mt-2 text-[16px] text-[color:var(--grey-400)] truncate'>{artistName}</p>
        </div>
      </div>
      {showEllipsis && (
        <div className='ml-2 flex-shrink-0'>
          <Trash2
            className='cursor-pointer invisible group-hover:visible transition-all'
            onClick={(e) => deleteTrack(e, trackId)}
          />
        </div>
      )}
      {other && (
        <div className='ml-2 flex-shrink-0' onClick={handleListMusicClick}>
          <ListMusic className='cursor-pointer invisible group-hover:visible transition-all' />
        </div>
      )}
    </div>
  );
}

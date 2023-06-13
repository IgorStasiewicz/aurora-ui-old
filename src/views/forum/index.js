import React from "react";
import Navbar from "../../components/navigations/navbar";
import { StyledWrapper } from "./StyledForum";
import { usePostsQuery, usePostsMutation } from '../../hooks/usePosts';
import PuffLoader from "react-spinners/PuffLoader";

const Forum = () => {
  const [nick, setNick] = React.useState('');
  const [content, setContent] = React.useState('');
  const { data } = usePostsQuery();
  const { mutate, isLoading } = usePostsMutation();

  const onSubmit = (event) => {
    event.preventDefault();
    mutate({ nick, content });
    setNick('');
    setContent('');
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <PuffLoader />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <StyledWrapper>
        <div className="left-column">
          {(data ?? []).map(({ id, nick, content, created }) => (
            <div key={id} className="post-wrapper">
              <h2>{nick}</h2>
              <h4>{new Date(created).toLocaleDateString()}</h4>
              <p>{content}</p>
            </div>
          ))}
        </div>
        <div className="right-column">
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nick" value={nick} onChange={({ target }) => setNick(target.value)} />
            <textarea placeholder="Comment" value={content} onChange={({ target }) => setContent(target.value)} />
            <button type="submit" disabled={!nick || !content || isLoading}>Add</button>
          </form>
        </div>
      </StyledWrapper>
    </div>
  );
};

export default Forum;

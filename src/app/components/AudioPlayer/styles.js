import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  color: #333;
  width: 96vw;
  max-width: 600px;
  margin: 0 auto;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #999;
  margin-right: 5px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  color: #333;
`;

export const PostTime = styled.span`
  color: #999;
  font-size: 0.8rem;
`;

export const AudioContainer = styled.div`
  margin-top: 10px;
  display:flex;
  align-items: center;
`;

export const PlayButton = styled.div`
  font-size: 1.2rem;
  background: #058ED9;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 5px;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > svg {
      margin-left: ${props => props.playing ? '0' : '.3rem' };
  }
`;

export const AudioProgress = styled.input`
  appearance: none;
  height: 5px;
  flex: 1;
  background: #999;
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #058ED9;
  }
`;

export const Time = styled.span`
  font-size: 0.8rem;
`;

export const Exit = styled.button`
  height: 40px;
  width: 40px;
  font-size: 1.8rem;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
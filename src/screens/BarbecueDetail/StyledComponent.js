import styled from 'styled-components';
import { colors, layout } from '../../constants';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 1;
`;

export const DetailContainer = styled.div`
  -webkit-box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  -moz-box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  box-shadow: 0px 2px 10px 0px ${colors.black(0.15)};
  border-radius: ${layout.scale() * 2}px;
  padding: ${layout.scale() * 20}px;
  justify-content: center;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: ${layout.scale() * 15}px;
  background-color: ${colors.white()};
  width: ${layout.screenWidth * 0.8}px;
  margin-top: ${layout.scale() * -50}px;
`;

export const IconContainer = styled.div`
  justify-content: flex-end;
  text-align: right;
  display: flex;
  flex: 1;
`;

export const IconButton = styled.div`
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export const TopContainer = styled.div`
  min-height: ${layout.scale() * 80}px;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;

export const CardDate = styled.h2`
  line-height: ${layout.scale() * 36}px;
  font-size: ${layout.scale() * 20}px;
  justify-content: center;
  font-weight: 800;
`;

export const Title = styled.text`
  line-height: ${layout.scale() * 36}px;
  font-size: ${layout.scale() * 28}px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  overflow: hidden;
`;

export const LeftTopComponent = styled.div`
  flex-direction: column;
`;

export const BottomContainer = styled.div`
  justify-content: space-between;
  align-content: flex-start;
  flex-direction: column;
  display: flex;
`;

export const BottomItemContainer = styled.div`
  flex-direction: row;
  display: flex;
`;

export const BottomText = styled.text`
  padding-left: ${layout.scale() * 5}px;
`;

export const ListView = styled.div`
  margin-top: ${layout.scale() * 30}px;
  flex-direction: column;
  display: flex;
`;

export const ItemContainer = styled.div`
  border-bottom: 1px solid ${colors.yellow(0.6)};
  padding: ${layout.scale() * 10}px;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  width: 100%;
`;

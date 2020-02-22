import styled from 'styled-components';
import { colors, layout } from '../../constants';
import { Input as InputCP } from '../../components';

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
  align-items: center;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: ${layout.scale() * 15}px;
  background-color: ${colors.white()};
  width: ${layout.screenWidth * 0.8}px;
  margin-top: ${layout.scale() * -50}px;
`;

export const Input = styled(InputCP)`
  margin: 0;
  border: 1px solid ${colors.grey(0.3)};
  :focus{
    border: 1px solid ${colors.yellow()};
  }
`;

export const InputsInLineView = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: ${layout.scale() * 300}px;
  align-self: center;
`;

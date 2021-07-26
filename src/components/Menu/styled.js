import styled from 'styled-components';

import { Space as AntdSpace, Input as AntdInput, Select as AntdSelect } from 'antd';

export const Space = styled(AntdSpace)`
  margin-bottom: 20px;

  .ant-form-inline .ant-form-item-with-help {
    margin-bottom: 0;
  }

  .ant-form-item-explain {
    position: absolute;
  }
`;

export const Input = styled(AntdInput)`
  width: 380px;
`;

export const Select = styled(AntdSelect)`
  width: 80px;
`;

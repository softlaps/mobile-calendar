import Button from 'components/common/Button';
import { useAppSelector } from 'hooks';
import { MdOutlineClose } from 'react-icons/md';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { RootState } from 'store';
import styled from 'styled-components';
import { EditorIconButton } from './EditorButtons';

const MemoTemplate = ({ children }: { children: React.ReactNode }) => {
  return <MemoTemplateBlock>{children}</MemoTemplateBlock>;
};

export const MemoForm = ({
  onClose,
  targetDate,
  onChange,
  onPost,
  onUpdate,
  onRemove,
}: {
  onClose: () => void;
  targetDate: string | null;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPost: () => void;
  onUpdate: () => void;
  onRemove: () => void;
}) => {
  const { memoContent, isMemo } = useAppSelector(
    (state: RootState) => state.memo,
  );
  return (
    <MemoFormBlock>
      <div className={`title_con ${isMemo && 'modify'}`}>
        <h2>{isMemo ? '메모 수정' : '메모 추가'}</h2>
        <EditorIconButton fs="20" white onClick={onClose}>
          <MdOutlineClose />
        </EditorIconButton>
      </div>
      <div className="memo_con">
        <div className="target_area">
          메모 날짜<span>{targetDate}</span>
        </div>
        <form>
          <label>메모 입력</label>
          <ReactTextareaAutosize
            placeholder="메모를 입력해주세요."
            onChange={onChange}
            value={memoContent}
            maxLength={100}
            maxRows={3}
          />
          {isMemo ? (
            <div className="btn_wrap">
              <Button $fullWidth $borderRedBtn onClick={onRemove}>
                삭제
              </Button>
              <Button $fullWidth $borderBtn onClick={onUpdate}>
                수정
              </Button>
            </div>
          ) : (
            <Button $fullWidth $borderBtn onClick={onPost}>
              저장
            </Button>
          )}
        </form>
      </div>
    </MemoFormBlock>
  );
};

const MemoTemplateBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

const MemoFormBlock = styled.div`
  width: calc(100% - 32px);
  max-width: 400px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;

  .title_con {
    width: 100%;
    display: flex;
    padding: 1em;
    margin-bottom: 0.3em;
    justify-content: space-between;
    background-color: #345087;
    color: white;
    h2 {
      font-size: 1.125rem;
    }

    &.modify {
      background-color: #dfc726;
    }
  }
  .memo_con {
    padding: 1em;
    padding-top: 0;
    .target_area {
      margin-bottom: 0.2em;
      padding: 0.7em 0;
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      color: #555;
      span {
        color: black;
        font-size: 1rem;
        margin-top: 0.5em;
      }
    }

    form {
      width: 100%;
      label {
        font-size: 0.75rem;
        color: #555;
      }
      textarea {
        margin-top: 0.5em;
        width: 100%;
        resize: none;
        padding: 0.3em;
        border: none;
        border-bottom: 1px solid #ccc;
        transition: border 0.3s;
        margin-bottom: 1em;
        &:focus {
          outline: none;
          border-color: #345087;
        }
      }
      button {
        min-height: auto;
        height: 40px;
        border-radius: 0;
      }
      .btn_wrap {
        width: 100%;
        display: flex;
        & > button + button {
          margin-left: 0.7rem;
        }
      }
    }
  }
`;

export default MemoTemplate;

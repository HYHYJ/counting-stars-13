import PageMainTitle from '@/components/PageMainTitle';
import FormAttachFile from '@/components/QnA,Review/FormAttachFile';
import FormCkEditor from '@/components/QnA,Review/FormCkEditor';
import FormTitleInput from '@/components/QnA,Review/FormTitleInput';
import ModalSelectOrder from '@/components/QnA,Review/ModalSelectOrder';
import ProductSelect from '@/components/QnA,Review/ProductSelect';
import WriteButton from '@/components/QnA,Review/WriteButton';
import { useData } from '@/store/useData';
import { useForm } from '@/store/useForm';
import { AUTH_TOKEN } from '@/utils/AUTH_TOKEN';
import axios from 'axios';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function WriteReview() {
  const { title, content, attachFile } = useForm();
  const scoreRef = useRef<HTMLSelectElement | null>(null);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { selectOrderId } = useData();

  // 후기 등록하기 -> 된다!
  const handleRegistReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content) {
      toast('내용을 입력해주세요 :)', {
        icon: '💛',
        duration: 2000,
      });
    }

    const newReview = {
      title,
      content,
      grade: scoreRef.current?.value,
      attachFile,
      orderId: selectOrderId,
    };

    const response = await axios.post(
      'https://localhost/api/replies',
      newReview,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );

    if (response.data.ok === 1) {
      toast('업로드하였습니다 :)', {
        icon: '⭐',
        duration: 2000,
      });

      console.log(newReview);

      navigate(`/review-detail`);
    }
  };

  // Esc키로 모달창 닫기
  if (modal) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setModal(!modal);
      }
    });
  }

  return (
    <>
      <Helmet>
        <title>Review 작성하기</title>
      </Helmet>

      <main>
        <PageMainTitle title="상품 사용 후기" />
        <form className="w-4/5 mx-auto" onSubmit={handleRegistReview}>
          <ProductSelect
            title="주문 상품 선택"
            onClick={() => setModal(!modal)}
          />
          {modal && <ModalSelectOrder onClick={() => setModal(!modal)} />}
          <table className="w-full border-t border-gray-300">
            <tbody>
              <FormTitleInput />
              <tr className="border-b border-gray-300">
                <td className="bg-gray-50 p-3">
                  <label htmlFor="inputGrade">평점</label>
                  <span className="text-starRed font-extrabold text-xl align-middle pl-1">
                    *
                  </span>
                </td>
                <td className="flex flex-row p-3">
                  <select name="grade" id="inputGrade" ref={scoreRef} required>
                    <option value="5" selected>
                      ⭐⭐⭐⭐⭐
                    </option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                  </select>
                </td>
              </tr>
              <FormCkEditor />
              <FormAttachFile />
            </tbody>
          </table>
          <WriteButton link="/review" />
        </form>
      </main>
    </>
  );
}

import {useState} from "react";
import {useNavigate} from "react-router";
import loginGroup from "../../assets/images/login-group.svg";
import logo from "../../assets/images/logo-no-period.svg";

export default function SignupAgree() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (checked) navigate("/signupform");
  };
  return (
    <div className='w-full flex flex-col-reverse md:flex-row overflow-hidden h-auto md:h-[calc(100vh-120px)]'>
      <div className='w-full md:w-[50%] bg-[#333333] flex items-center justify-center h-auto md:h-full'>
        <div className='w-full max-w-[600px] p-8'>
          <h1 className='text-2xl font-bold mb-6 text-center'>이용약관 동의</h1>

          <div className='h-[300px] overflow-y-auto border rounded-md border-[#8EF3BF] p-4 text-sm leading-relaxed mb-6 scroll overflow-scroll [&::-webkit-scrollbar]:hidden'>
            <p>
              본 서비스는 POPcon이 제공하는 온라인 음악 감상 및 추천 콘텐츠 플랫폼으로, 회원가입을
              통해 다양한 기능을 이용하실 수 있습니다.
              <br />
              본 서비스를 이용함으로써 이용자는 본 약관에 동의하게 되며, 약관은 관련 법령 및 회사의
              정책에 따라 수시로 변경될 수 있습니다.
              <br />
              회사는 보다 나은 서비스 제공을 위해 사용자로부터 일부 정보(예: 브라우저 유형, 접속
              일시, 선호 콘텐츠 등)를 자동 수집하며, 수집된 정보는 서비스 품질 개선, 맞춤형 콘텐츠
              제공, 시스템 안정성 확보를 위해서만 활용됩니다. 수집된 정보는 외부에 무단으로 공유되지
              않으며, 관계 법령에서 요구하는 경우를 제외하고는 제3자에게 제공되지 않습니다.
              <br />
              이용자는 회사가 제공하는 서비스 내 콘텐츠를 비상업적 개인 용도 이외의 목적으로 사용할
              수 없으며, 무단 복제·배포 등의 행위는 관련 법령에 의해 처벌받을 수 있습니다. 또한,
              회사는 서비스의 운영, 보안, 유지보수를 위한 범위 내에서 일부 기능 또는 콘텐츠를 사전
              예고 없이 변경하거나 종료할 수 있습니다. 본 서비스의 저작권, 상표권 등 모든
              지식재산권은 회사 또는 정당한 권리자에게 있으며, 이를 침해할 경우 민형사상의 책임을 질
              수 있습니다.
              <br />
              이용자는 서비스 이용과 관련하여 법령 및 본 약관을 준수해야 하며, 위반 시 서비스 이용이
              제한될 수 있습니다.
              <br />
              자세한 사항은 개인정보 처리방침 및 커뮤니티 운영 정책을 참고해 주세요. 서비스 이용과
              관련한 문의사항은 고객센터를 통해 접수해주시기 바랍니다.
            </p>
          </div>

          <label className='flex items-center text-sm mb-3'>
            <input
              type='checkbox'
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className='mr-2 accent-[#71EBBE]'
            />
            [필수] 위 약관에 동의합니다.
          </label>

          <label className='flex items-center text-sm mb-3'>
            <input type='checkbox' className='mr-2 accent-[#71EBBE]' />
            [선택] 이벤트 및 프로모션 알림 수신에 동의합니다.
          </label>
          <label className='flex items-center text-sm mb-6'>
            <input type='checkbox' className='mr-2 accent-[#71EBBE]' />
            [선택] Sucoding handsome에 동의합니다.
          </label>

          <button
            onClick={handleNext}
            disabled={!checked}
            className={`w-full py-2 rounded-md font-semibold text-black transition-colors ${
              checked ? "bg-[#71EBBE] cursor-pointer " : "bg-[#8B8B8B] cursor-not-allowed"
            }`}
          >
            다음 단계로
          </button>
        </div>
      </div>

      <div className='w-full md:w-[50%] bg-[#1B1C1E] relative'>
        <div className='flex items-center justify-center h-auto md:h-full pb-8 md:pb-0 pt-24 md:pt-0'>
          <img src={loginGroup} alt='캐릭터' className='w-[70%] max-w-[500px] object-contain' />
        </div>
        <div className='absolute bottom-[5%] right-[10%] hidden md:block'>
          <img src={logo} alt='POPcon 로고' className='w-[200px] h-auto' />
        </div>
      </div>
    </div>
  );
}

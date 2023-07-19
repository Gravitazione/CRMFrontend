import LargeButton from '../../components/buttons/LargeButton';
import SuccessButton from '../../components/buttons/SuccessButton';
import Preview2icon from '../../assets/icons/file-icons_microsoft-excel.svg';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Preview3icon from '../../assets/icons/ep_circle-plus-filled.svg';

const Preview = () => {
  return (
    <div className="m-5 space-y-5">
      <div className="max-w-[500px]">
        <LargeButton
          title="Preview"
          labelId="Preview1"
          onClick={() => {
            console.log('Preview');
          }}
        />
      </div>
      <div>
        <SuccessButton
          title="Preview"
          labelId="Preview2"
          onClick={() => {
            console.log('preview2');
          }}
          icon={Preview2icon}
          altText="Preview2"
        />
      </div>
      <div>
        <PrimaryButton
          title="Preview"
          labelId="Preview3"
          onClick={() => {
            console.log('preview3');
          }}
          icon={Preview3icon}
          altText="Preview3"
        />
      </div>
    </div>
  );
};

export default Preview;

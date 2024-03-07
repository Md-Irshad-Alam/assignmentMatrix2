import GroupContainer from './GroupContainer';
import Phase2Container from './Phase2Container';
import FilterFormContainer from './FilterFormContainer';
import style from '../Styles/navbar.module.css';
import '../Styles/common.css';
import Headerpart from './Headerpart';
import Navbar from './Navbar';
import Idoevent from './Idoevent';
const Faq = () => {
  return (
    <div className='absolute top-[0rem] left-[0rem] bg-gray-400 w-[100%] h-[318.375rem] overflow-hidden text-left text-[1.25rem] text-white font-zcool-kuaile'>
      <img
        className='absolute top-[0rem] left-[0rem] w-full h-[36.75rem] object-cover'
        alt=''
        src='/rectangle-18@2x.png'
      />
      <Navbar />
      <img
        className='absolute top-[75.625rem] left-[0rem] w-full h-[71.563rem] object-cover opacity-[0.71]'
        alt=''
        src='/rectangle-19@2x.png'
      />
      <div className='  absolute top-[17.25rem] left-[7.688rem] text-[2.813rem] leading-[119%] font-shojumaru text-snow-300 text-center inline-block w-[80%] m-auto'>
        Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
      </div>

      {/* introduction */}
      <Headerpart />
      {/* introduction end  */}

      {/* fase 1 end */}

      <div className='absolute top-[136rem] left-[8.188rem] text-[1rem] text-whitesmoke-400 opacity-[0.52]'>
        Generate a unique referral link
      </div>
      <div className='absolute top-[134.938rem] left-[6.875rem] rounded-xl box-border w-[29.313rem] h-[3.125rem] border-[1px] border-solid border-firebrick' />
      <img
        className='absolute top-[147.188rem] left-[0rem] w-[94.5rem] h-[44.125rem] object-cover opacity-[0.71]'
        alt=''
        src='/rectangle-20@2x.png'
      />
      <div className='absolute top-[161.125rem] left-[36.063rem] w-[55.338rem] h-[23.25rem] text-[1rem] text-whitesmoke-100 font-shojumaru'>
        <GroupContainer />
        <img
          className='absolute top-[4.063rem] left-[18.875rem] w-[17.375rem] h-[19.188rem] object-cover'
          alt=''
          src='/logo-savior-red-copy-2@2x.png'
        />
      </div>
      <div className='absolute top-[151.188rem] left-[calc(50%_-_164px)] text-[2.75rem] leading-[119%] font-shojumaru text-crimson inline-block w-[20.625rem]'>
        Tokenomics
      </div>
      <div className='absolute top-[240.063rem] left-[calc(50%_+_187px)] text-[2.75rem] leading-[119%] font-shojumaru text-crimson inline-block w-[7.438rem]'>
        FAQ
      </div>
      {/* participate start  */}

      {/* IDO event start */}
      <Idoevent />

      <div className='absolute top-[135.188rem] left-[29.75rem] rounded-xl bg-crimson w-[6.25rem] h-[2.625rem]' />
      <div className='absolute top-[135.938rem] left-[30.688rem] text-[0.938rem]'>
        Generate
      </div>
      <img
        className='absolute top-[135.375rem] left-[36.625rem] w-[2.125rem] h-[2.125rem] overflow-hidden'
        alt=''
        src='/fluentcopy16filled.svg'
      />
      <div className='absolute top-[162.5rem] left-[calc(50%_-_666px)] rounded-xl bg-gray-500 box-border w-[25.75rem] h-[19.125rem] border-[1.5px] border-solid border-orangered' />
      <div className='absolute top-[159.938rem] left-[10.5rem] rounded-xl bg-crimson w-[15.25rem] h-[4.375rem]' />

      {/* token info */}

      <div className='absolute top-[161.375rem] left-[13.063rem] text-[1.125rem] font-shojumaru'>
        Token Details
      </div>
      <div className='absolute top-[166.938rem] left-[9.313rem]'>Name</div>
      <div className='absolute top-[166.813rem] left-[21.125rem] text-red'>
        Saviour
      </div>
      <div className='absolute top-[170.188rem] left-[9.313rem]'>Symbol</div>
      <div className='absolute top-[170.063rem] left-[21.125rem] text-red'>
        SVR
      </div>
      <div className='absolute top-[173.438rem] left-[9.313rem]'>
        Total Supply
      </div>
      <div className='absolute top-[173.313rem] left-[21.125rem] text-red'>
        1000 Trillion
      </div>
      <div className='absolute top-[176.688rem] left-[9.313rem]'>Decimals</div>
      <div className='absolute top-[176.563rem] left-[21.125rem] text-red'>
        18
      </div>

      <div className='absolute top-[123.813rem] left-[17.875rem] rounded-[16.21px] [background:linear-gradient(93.73deg,_#d51b46_11.92%,_#ee6910_83.65%)] overflow-hidden flex flex-row items-center justify-center py-[0.787rem] px-[0.984rem] text-[0.881rem]'>
        <div className='relative'>Connect Wallet</div>
      </div>
      <div className='absolute top-[191.313rem] left-[0.063rem] w-[94.5rem] h-[44.75rem] text-[2.75rem] text-crimson font-shojumaru'>
        <img
          className='absolute top-[0rem] left-[0rem] w-[94.5rem] h-[44.75rem] object-cover opacity-[0.71]'
          alt=''
          src='/rectangle-21@2x.png'
        />
        <div className='absolute top-[4rem] left-[calc(50%_-_143px)] leading-[119%] inline-block w-[17.625rem]'>
          Road Map
        </div>
        <div className='absolute top-[14.188rem] left-[10.25rem] w-[72.444rem] h-[21.813rem] text-[1.369rem] text-white font-inter'>
          <Phase2Container
            phaseDescription='/divwrapper--styledwrappersc1fux03g0@2x.png'
            phaseTitle='Phase 2'
            initiativeDescription='Increase Liquidity and Trading Volume'
          />
          <div className='absolute top-[0rem] left-[0rem] rounded-[13.17px] w-[14.819rem] flex flex-row items-start justify-start max-w-[41.485rem]'>
            <div className='w-[14.956rem] absolute !m-[0] top-[-0.069rem] left-[-0.069rem] rounded-[13.17px] [background:linear-gradient(-23.78deg,_#ed0137,_#ef490f)] h-[21.95rem] z-[0]' />
            <div className='w-[14.681rem] absolute !m-[0] top-[0.069rem] left-[0.069rem] rounded-[13.17px] bg-gray-300 h-[21.675rem] z-[1]' />
            <img
              className='w-[14.819rem] relative rounded-[17.56px] h-[21.813rem] overflow-hidden shrink-0 object-cover z-[2]'
              alt=''
              src='/divwrapper--styledwrappersc1fux03g0@2x.png'
            />
            <div className='w-full absolute !m-[0] h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[13.17px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(10,_28,_61,_0.2)_70%,_rgba(237,_1,_55,_0.09))] z-[3]' />
            <div className='w-[calc(100%_-_144.2px)] !m-[0] absolute h-[calc(100%_-_222.8px)] top-[12.556rem] right-[7.531rem] bottom-[1.369rem] left-[1.481rem] flex flex-col items-start justify-start gap-[0.823rem_0rem] z-[4]'>
              <b className='relative leading-[2.058rem]'>Phase 1</b>
              <div className='w-[12.275rem] relative text-[1.1rem] leading-[1.646rem] font-manrope text-darkgray flex items-center'>
                Technical Readiness and Smart Contract Audit
              </div>
            </div>
          </div>
          <Phase2Container
            phaseDescription='/divwrapper--styledwrappersc1fux03g0@2x.png'
            phaseTitle='Phase 3'
            initiativeDescription='Community Building and Marketing'
            propLeft='38.413rem'
            propWidth='12.413rem'
          />
          <Phase2Container
            phaseDescription='/divwrapper--styledwrappersc1fux03g0@2x.png'
            phaseTitle='Phase 4'
            initiativeDescription='Ecosystem Expansion and Partnerships'
            propLeft='57.625rem'
            propWidth='12.213rem'
          />
        </div>
      </div>
      <FilterFormContainer
        questionText={`Why choose "Savior"?`}
        questionNumberText='1'
      />
      <FilterFormContainer
        questionText='Why is the IDO duration so long?'
        questionNumberText='2'
        propTop='253.125rem'
        propLeft='42.75rem'
        propLeft1='2.375rem'
      />
      <div className='absolute top-[258.938rem] left-[42.75rem] w-[40rem] h-[4.813rem] font-shojumaru'>
        <div className='absolute top-[-0.062rem] left-[-0.062rem] rounded-xl bg-gray-200 box-border w-[40.125rem] h-[4.938rem] border-[1px] border-solid border-crimson' />
        <div className='absolute top-[1.688rem] left-[7.563rem]'>
          When will trading go live?
        </div>
        <div className='absolute top-[1.688rem] left-[2.375rem] text-[1.125rem]'>
          3
        </div>
        <img
          className='absolute top-[1.75rem] left-[36.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden bg-white'
          alt=''
          src='/down-arrow.svg'
        />
        <div className='absolute top-[5.813rem] left-[0rem] w-[40rem] h-[13.688rem]'>
          <div className='absolute top-[-0.062rem] left-[-0.062rem] rounded-xl bg-gray-200 box-border w-[40.125rem] h-[12.75rem] border-[1px] border-solid border-crimson' />
          <div className='absolute top-[1.688rem] left-[7.563rem]'>
            When can we claim the tokens?
          </div>
          <div className='absolute top-[1.688rem] left-[2.375rem] text-[1.125rem]'>
            4
          </div>
          <img
            className='absolute top-[3.25rem] left-[36.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden bg-white'
            alt=''
            src='/down-arrow.svg'
          />
          <div className='absolute top-[5.313rem] left-[2.313rem] rounded-xl bg-whitesmoke-500 w-[35.5rem] h-[5.188rem]' />
          <div className='absolute top-[6.313rem] left-[3.688rem] text-[0.938rem] leading-[170.42%] font-zcool-kuaile text-snow-200 inline-block w-[32.75rem] h-[2.875rem]'>
            <p className='m-0'>
              After the IDO concludes, you can claim the tokens on our official
              website.
            </p>
          </div>
        </div>
      </div>
      <img
        className='absolute top-[242.875rem] left-[5.438rem] w-[31.438rem] h-[31.438rem] object-cover'
        alt=''
        src='/image-1@2x.png'
      />
      <div className='absolute top-[291.625rem] left-[calc(50%_-_756px)] [background:linear-gradient(180deg,_#030405,_#120101)] w-[94.5rem] h-[26.75rem] text-[1.5rem] font-poppins'>
        <b className='absolute top-[15.75rem] left-[calc(50%_-_57px)] tracking-[1.71px] leading-[1.603rem] uppercase text-transparent !bg-clip-text [background:linear-gradient(92.23deg,_#ff002a,_#720005)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>
          SITEMAP
        </b>
        <div className='absolute top-[18.875rem] left-[calc(50%_-_309px)] w-[38.625rem] h-[1.25rem] text-[0.8rem]'>
          <div className='absolute top-[0rem] left-[0rem] leading-[1.202rem] font-semibold'>
            Home
          </div>
          <div className='absolute top-[0rem] left-[4.438rem] leading-[1.202rem] font-semibold'>
            IDO
          </div>
          <div className='absolute top-[0rem] left-[calc(50%_-_183px)] leading-[1.202rem] font-semibold'>
            Tokenomics
          </div>
          <div className='absolute top-[0rem] left-[14.875rem] leading-[1.202rem] font-semibold'>
            Road Map
          </div>
          <div className='absolute top-[0rem] left-[20.5rem] leading-[1.202rem] font-semibold'>
            Whitepaper
          </div>
          <div className='absolute top-[0rem] left-[27.375rem] leading-[1.202rem] font-semibold'>
            Pledge
          </div>
          <div className='absolute top-[0rem] left-[32.188rem] leading-[1.202rem] font-semibold'>
            NFT
          </div>
          <div className='absolute top-[0rem] left-[35.688rem] leading-[1.202rem] font-semibold'>
            Games
          </div>
        </div>
        <div className='absolute top-[23.25rem] left-[calc(50%_-_75px)] w-[9.375rem] h-[1.338rem]' />
        <img
          className='absolute top-[4rem] left-[41.125rem] w-[12.5rem] h-[10.188rem] overflow-hidden object-cover'
          alt=''
          src='/frame-1790@2x.png'
        />
        <div className='absolute top-[22.625rem] left-[calc(50%_-_56px)] w-[6.938rem] h-[1.688rem]'>
          <div className='absolute top-[0rem] left-[calc(50%_-_55.5px)] w-[4.819rem] h-[1.688rem]'>
            <div className='absolute top-[0rem] left-[0rem] w-[12.056rem] flex flex-col items-start justify-start'>
              <div className='flex flex-row items-start justify-start py-[0rem] pr-[15.45rem] pl-[0rem] gap-[0rem_0.858rem]'>
                <img
                  className='w-[1.719rem] relative h-[1.719rem]'
                  alt=''
                  src='/link--icontwitter6b3c178f26a209f13bcced7e816ba143svg.svg'
                />
                <img
                  className='w-[1.719rem] relative h-[1.719rem]'
                  alt=''
                  src='/link--icontelegram3e7b16fc68b2a61fe78c02f92f7a45f6svg.svg'
                />
              </div>
            </div>
          </div>
          <img
            className='absolute top-[0.063rem] left-[5.438rem] w-[1.5rem] h-[1.5rem] overflow-hidden'
            alt=''
            src='/clarityemailsolid.svg'
          />
        </div>
      </div>

      <img
        className='absolute top-[38.438rem] left-[-764.437rem] w-[6.25rem] h-[6.25rem]'
        alt=''
      />
    </div>
  );
};

export default Faq;

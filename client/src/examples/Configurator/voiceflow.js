import { Chat, ChatWindow, Launcher, SessionStatus, SystemResponse, TurnType, UserResponse, useRuntime } from '@voiceflow/react-chat';
import { useState, useEffect } from 'react';
import { match } from 'ts-pattern';
import logo from 'assets/images/logo2.png'
const IMAGE = 'https://picsum.photos/seed/1/200/300';
const AVATAR = 'https://picsum.photos/seed/1/80/80';

export const MyChat = () => {
  const [open, setOpen] = useState(true);
  const runtime = useRuntime({
    verify: { authorization: 'VF.DM.654cb02d1cb23a00074afe14.0leujyWjnO2asG1I' },
    session: { userID: 'gav' },
  });

  const handleLaunch = async () => {
    setOpen(true);
    try{
      runtime.launch();
    }catch(error){
      console.log(error)
    }
  };

  const handleEnd = () => {
    runtime.setStatus(SessionStatus.ENDED);
    setOpen(false);
  };
  useEffect(() => {

if(open){    
    handleLaunch();
}
  }, []);


  return (
    <div
      style={{
        position: 'absolute',
        right: '0.20rem',
        top: '6.5rem',
        bottom: '3rem',
        width: '360px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <ChatWindow.Container>
        <Chat
         title="NotBTC Assistant"
         //description="welcome to my assistant"
         image={logo}
         avatar={logo}
        //   withWatermark
          startTime={runtime.session.startTime}
          hasEnded={runtime.isStatus(SessionStatus.ENDED)}
          isLoading={!runtime.session.turns.length}
          onStart={runtime.launch}
          onSend={runtime.reply}
          onEnd={handleEnd}
        >
          {runtime.session.turns.map((turn, turnIndex) =>
            match(turn)
              .with({ type: TurnType.USER }, ({ id, type: _, ...props }) => <UserResponse {...props} key={id} />)
              .with({ type: TurnType.SYSTEM }, ({ id, type: _, ...props }) => (
                <SystemResponse key={id} {...props} avatar={logo} isLast={turnIndex === runtime.session.turns.length - 1} />
              ))
              .exhaustive()
          )}
          {runtime.indicator && <SystemResponse.Indicator avatar={logo} />}
        </Chat>
      </ChatWindow.Container>
    </div>
  );
};
export default MyChat;
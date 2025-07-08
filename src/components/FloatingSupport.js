import Draggable from 'react-draggable';

export default function FloatingSupport() {
  return (
    <Draggable>
      <div className="floating-image" >
        <img src="/free.png" alt="Support Icon" />
      </div>
    </Draggable>
  );
}

import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef, useEffect, useState } from 'react';
function App() {
  const [color, setColor] = useState('#000000');
  const canvas = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (event.ctrlKey && key === 'z') {
        canvas.current?.undo()
      } else if (event.ctrlKey && key === 'y') {
        canvas.current?.redo()
      } else if (key === '1') {
        setColor('#000000')
      } else if (key === '2') {
        setColor('#ff0000')
      } else if (key === '3') {
        setColor('#00ff00')
      } else if (key === '4') {
        setColor('#0000ff')
      } else if (key === '5') {
        setColor('#ff00ff')
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ReactSketchCanvas
      ref={canvas}
      strokeWidth={4}
      canvasColor="#eee"
      strokeColor={color}
    />
  );
}

export default App;

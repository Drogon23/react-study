import React from "react";

const IterationSample = () => {
    const [names, setNames] = React.useState([
        {id: 1, text: "눈사람"},
        {id: 2, text: "얼음"},
        {id: 3, text: "눈"},
        {id: 4, text: "바람"},
    ]);
    const [inputText, setInputText] = React.useState("");
    const [nextId, setNextId] = React.useState(5);
    const inputRef = React.useRef();

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
      const nextNames = names.concat({
          id: nextId,
          text: inputText
      });

      setNextId(nextId + 1);
      setNames(nextNames);
      setInputText('');
      inputRef.current.focus();
    };
    const onRemove = id => {
      const nextNames = names.filter(name => name.id !== id);
      setNames(nextNames);
    };


    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => {onRemove(name.id)}}>{name.text}</li>);

    return (
        <>
            <input ref={inputRef} value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;

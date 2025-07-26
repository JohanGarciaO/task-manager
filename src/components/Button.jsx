function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-900 text-white p-2 rounded-md hover:bg-slate-800"
    >
      {props.children}
    </button>
  );
}

export default Button;

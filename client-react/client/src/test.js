{typeof data[0] === "undefined" ? (
  <p>Loading...</p>
) : (
  data.map((item, index) => (
    <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
  ))
)}
import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { exp = [] } = router.query;
  console.log(exp);
  if (exp.length === 2) {
    return (
      <h1>
        Viewing docs for features {exp[0]} and concept {exp[1]}
      </h1>
    );
  } else if (exp.length === 1) {
    return <h1>Viewing docs for features {exp[0]}</h1>;
  }
  return (
    <h1>Docs Home page</h1>
  )
}

export default Docs;

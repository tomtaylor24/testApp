import { useState } from "react";
const News = () => {
  const initialValues = { name: "", mail: "", content: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formValues)
    setFormErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      const postData = {
        name: formValues.name,
        email: formValues.mail,
        message: formValues.content,
      };
      const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: "POST",
        body: JSON.stringify(postData)
      });
      alert("送信しました");
      setFormValues(initialValues);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.name) {
      errors.name = "お名前を入力してください";
    } else if (values.name.length > 30) {
      errors.name = "30字以内で入力してください";
    }
    if (!values.mail) {
      errors.mail = "メールアドレスを入力してください";
    } else if (!regex.test(values.mail)) {
      errors.mail = "正しいメールアドレスを入力してください";
    }
    if (!values.content) {
      errors.content = "内容を入力してください";
    } else if (values.content.length > 500) {
      errors.content = "500字以内で入力してください";
    }
    return errors;
  };

  const handleClear = () => {
    setFormValues(initialValues);
    setFormErrors({});
  };

  return (
    <>
      <div className="inner">
        <h2 className="formTitle">お問い合わせフォーム</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <ul className="formList">
            <li className="formList__item">
              <label>お名前</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <p className="formError">{formErrors.name}</p>
            <li className="formList__item">
              <label>メールアドレス</label>
              <input
                type="text"
                name="mail"
                value={formValues.mail}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <p className="formError">{formErrors.mail}</p>
            <li className="formList__item">
              <label>内容</label>
              <textarea
                type="text"
                name="content"
                value={formValues.content}
                onChange={(e) => handleChange(e)}
              />
            </li>
            <p className="formError">{formErrors.content}</p>
          </ul>
          <div className="formBtnWrap">
            <button className="submit" type="submit" onClick={handleSubmit}>
              送信
            </button>
            <button className="clear" type="button" onClick={handleClear}>
              クリア
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default News;

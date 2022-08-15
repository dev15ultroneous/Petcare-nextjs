import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "@/styles/Signup.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post("http://192.168.1.28:8001/api/signup", data)
      .then((r) => {
        if (r.data.status === "success") {
          router.push("/");
        } else {
          alert("failed");
        }
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        }
      });

  return (
    <section className={styles.SignupSection}>
      <Container fluid className={styles.contFluid}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.SignupForm}>
            <Row>
              <Col xl={6}>
                <Image
                  src={"/Images/Main.png"}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col xl={6}>
                <div class={styles.CardBody}>
                  <h3 class={styles.Signuph3}>Sign up</h3>
                  <div class={styles.FormOutline}>
                    <Row>
                      <Col xl={6}>
                        <label class="form-label" for="form3Example8">
                          First Name
                        </label>
                        <input
                          {...register("firstName")}
                          type="text"
                          id="form"
                          class="form-control form-control-lg"
                        />
                      </Col>
                      <Col xl={6}>
                        <label class="form-label" for="form3Example8">
                          Last Name
                        </label>
                        <input
                          {...register("lastName")}
                          type="text"
                          id="form"
                          class="form-control form-control-lg"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div class={styles.FormOutline}>
                    <label class="form-label" for="form3Example97">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="text"
                      id="form"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class={styles.FormOutline}>
                    <label class="form-label" for="form3Example8">
                      Password
                    </label>

                    <input
                      {...register("password")}
                      type="text"
                      id="form"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class={styles.FormOutline}>
                    <label class="form-label" for="form3Example8">
                      Confirm Password
                    </label>

                    <input
                      {...register("conformPassword")}
                      type="text"
                      id="form"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class={styles.FormOutline}>
                    <label class="form-label" for="form3Example97">
                      Phone Number
                    </label>
                    <input
                      {...register("phoneNumber")}
                      type="text"
                      id="form"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <div class={styles.FormOutline}>
                    <label class="form-label" for="form3Example8">
                      Address
                    </label>

                    <input
                      {...register("address")}
                      type="text"
                      id="form"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <div class={styles.SubmitButton}>
                    <button type="submit" class={styles.Submit}>
                      signup
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Signup;
// " form-control-lg"

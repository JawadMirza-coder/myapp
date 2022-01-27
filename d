[33mf229fe9[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m Functional Component
[33m18eba8b[m Perenstation and Container Components
[33m17491fd[m[33m ([m[1;31morigin/main[m[33m)[m With Dish Comment
[33m8f1ab2a[m Cards
[33mfa3bba4[m NEW COMPONENT
[33mb04334a[m commonent
[33m3381bd0[m initial Setup

   <Row className="form-group">
                    <Label htmlFor="lastname" md={2}>
                      Last Name
                    </Label>
                    <Col md={10}>
                      <Control.text
                        model=".lastname"
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        className="form-control"
                        validators={{
                          required,
                          minlength: minlength(3),
                          maxlength: maxlength(15),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".lastname"
                        show="touched"
                        messages={{
                          required: "Required",
                          minlength: "Must be greater than 2 characters",
                          maxlength: "Must be less then 15 characters",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="telnum" md={2}>
                      Contact Tel.
                    </Label>
                    <Col md={10}>
                      <Control.text
                        model=".telnum"
                        id="telnum"
                        name="telnum"
                        placeholder="Tel. Number"
                        className="form-control"
                        validators={{
                          required,
                          minlength: minlength(3),
                          maxlength: maxlength(15),isNum
                        }}
                      />
                       <Errors
                        className="text-danger"
                        model=".telnum"
                        show="touched"
                        messages={{
                          required: "Required",
                          minlength: "Must be greater than 2 characters",
                          maxlength: "Must be less then 15 characters",
                          isNum:"Must be a Number"
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="email" md={2}>
                      Email
                    </Label>
                    <Col md={10}>
                      <Control.text
                        model=".email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                          required,
                          validEmail
                        }}
                      />
                       <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                          required: "Required",
                          validEmail:"Must be a Valid Email"
                        }}/>

                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 6, offset: 2 }}>
                      <div className="form-check">
                        <Label check>
                          <Control.checkbox
                            model=".agree"
                            name="agree"
                            className="form-check-input"
                          />{" "}
                          <strong>May we contact you?</strong>
                        </Label>
                      </div>
                    </Col>
                    <Col md={{ size: 3, offset: 1 }}>
                      <Control.select
                        model=".contactType"
                        name="contactType"
                        className="form-control"
                      >
                        <option>Tel.</option>
                        <option>Email</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="message" md={2}>
                      Your Feedback
                    </Label>
                    <Col md={10}>
                      <Control.textarea
                        model=".message"
                        id="message"
                        name="message"
                        rows="12"
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }}>
                      <Button type="submit" color="primary">
                        Send Feedback
                      </Button>
                    </Col>
                  </Row>
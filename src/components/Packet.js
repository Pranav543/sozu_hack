import React, { useState, useEffect, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button, Modal, Input } from "antd";
import { getExplorerUrl, ipfsUrl } from "../util";
import { ACTIVE_CHAIN_ID } from "../util/constants";
import { Antibot } from "zkme-antibot-component";

function Packet(props) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [showAntibot, setShowAntibot] = useState(false);
  const sigCanvas = useRef();

  const {
    signId,
    contractAddress,
    authed,
    signerAddress,
    loading,
    sign,
    title,
    files,
  } = props;

  const verifySuccess = (response) => {
    console.log("response: ", response); //print out the face image in base64 code
    setIsVerified(true); // Set user as verified
  };

  const postSignature = () => {
    const dataUrl = sigCanvas.current.toDataURL();
    sign(dataUrl);
  };

  const openUrl = (url) => window.open(url, "_blank");

  if (!authed) {
    return (
      <div className="centered">
        <p>
          You are not logged in with the expected user for this esignature
          contract.
          <br />
          <b className="error-text">
            Please log in with address: {signerAddress}
          </b>
        </p>

        <p>
          <a href="/">Return to home</a>
        </p>
      </div>
    );
  }

  const filesToSign = files || [];

  return (
    <div>
      {/* <div>{JSON.stringify(props, null, "\t")}</div> */}
      <div>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
      </div>
      <div>
        <a href={getExplorerUrl(contractAddress)} target="_blank">
          View Contract ({ACTIVE_CHAIN_ID.name})
        </a>
        <br />
        <a href={ipfsUrl(signId)} target="_blank">
          View Request
        </a>
      </div>

      <br />
      <h3>Documents to acknowledge: </h3>
      {filesToSign.map((f, i) => {
        return (
          <li key={i}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openUrl(f.url);
              }}
            >
              {f.name}
            </a>
          </li>
        );
      })}
      <br />
      <br />
      <p>
        By continuing, you agree to the documents listed and available for
        download above.
      </p>
      {isVerified ? (
        <Button
          type="primary"
          onClick={() => setShowModal(true)}
          disabled={!authed || filesToSign.length === 0}
        >
          Accept Documents
        </Button>
      ) : (
        <Button type="primary" onClick={() => setShowAntibot(true)}>
          Prove Liveness
        </Button>
      )}

      {showAntibot && !isVerified && (
        <div>
          <Antibot isOpen={showAntibot} verifySuccess={verifySuccess} />
        </div>
      )}

      <Modal
        visible={showModal}
        title={`${title}: Sign and complete`}
        footer={[
          <Button key="back" onClick={() => setShowModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={postSignature}
          >
            Sign
          </Button>,
        ]}
      >
        <Input
          placeholder="Type name"
          value={name}
          prefix="Type name:"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <hr />
        <p>Draw signature:</p>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="green"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        />
      </Modal>
    </div>
  );
}

export default Packet;

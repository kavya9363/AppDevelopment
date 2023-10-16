import React from "https://cdn.skypack.dev/react@17.0.1";

const FileList = ({ files, onDeleteFile }) => {
    return (
        <div className="kb-attach-box">
            <hr />
            {files.map((data, index) => {
                const { id, filename, filetype, fileimage, datetime, filesize } = data;
                return (
                    <div className="file-atc-box" key={id}>
                        {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                            <div className="file-image">
                                <img src={fileimage} alt={filename} />
                            </div>
                        ) : (
                            <div className="file-image">
                                <i className="far fa-file-alt"></i>
                            </div>
                        )}
                        <div className="file-detail">
                            <h6>{filename}</h6>
                            <p>
                                <span>Size: {filesize}</span>
                                <span className="ml-3">Modified Time: {datetime}</span>
                            </p>
                            <div className="file-actions">
                                <button className="file-action-btn" onClick={() => onDeleteFile(id)}>Delete</button>
                                <a href={fileimage} className="file-action-btn" download={filename}>Download</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default FileList;

import { useState } from "react";

export default function TinyTalesBook() {
    const [childName, setChildName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");

    const [nameNom, setNameNom] = useState("");
    const [nameGen, setNameGen] = useState("");
    const [nameDat, setNameDat] = useState("");
    const [nameAcc, setNameAcc] = useState("");
    const [nameIns, setNameIns] = useState("");
    const [nameLoc, setNameLoc] = useState("");
    const [nameVoc, setNameVoc] = useState("");

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "">("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setMessage("");
        setMessageType("");

        if (!childName || !age || !gender || !language) {
            setMessage("Please fill in all required fields.");
            setMessageType("error");
            return;
        }

        if (!imageFile) {
            setMessage("Please upload an image.");
            setMessageType("error");
            return;
        }

        try {
            setLoading(true);

            const form = new FormData();
            form.append("child_name", childName);
            form.append("age", age);
            form.append("gender", gender);
            form.append("language", language);

            form.append("name_nom", nameNom);
            form.append("name_gen", nameGen);
            form.append("name_dat", nameDat);
            form.append("name_acc", nameAcc);
            form.append("name_ins", nameIns);
            form.append("name_loc", nameLoc);
            form.append("name_voc", nameVoc);

            form.append("image", imageFile);

            const res = await fetch("https://api.granitkosumi.com/api/tiny-tales-book", {
                method: "POST",
                body: form,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Submission failed");
            }

            setMessage("Submitted successfully.");
            setMessageType("success");

            setChildName("");
            setAge("");
            setGender("");
            setLanguage("");
            setNameNom("");
            setNameGen("");
            setNameDat("");
            setNameAcc("");
            setNameIns("");
            setNameLoc("");
            setNameVoc("");
            setImageFile(null);

            const fileInput = document.getElementById("image-upload") as HTMLInputElement | null;
            if (fileInput) fileInput.value = "";
        } catch (error) {
            setMessage(error instanceof Error ? error.message : "Something went wrong.");
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Tiny Tales Book</h1>
                    <p style={styles.subtitle}>
                        Fill in the details below to submit a personalized book request.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.grid}>
                        <div style={styles.field}>
                            <label style={styles.label}>
                                Emri i fëmijës <span style={styles.required}>*</span>
                            </label>
                            <input
                                style={styles.input}
                                value={childName}
                                onChange={(e) => setChildName(e.target.value)}
                                placeholder="Shkruaj emrin"
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>
                                Mosha e fëmijës <span style={styles.required}>*</span>
                            </label>
                            <input
                                required
                                type="number"
                                min="0"
                                style={styles.input}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="P.sh. 5"
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>
                                Gjinia <span style={styles.required}>*</span>
                            </label>
                            <select
                                style={styles.input}
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Zgjidh</option>
                                <option value="djale">Djalë</option>
                                <option value="vajze">Vajzë</option>
                            </select>
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>
                                Gjuha <span style={styles.required}>*</span>
                            </label>
                            <select
                                style={styles.input}
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="">Zgjidh</option>
                                <option value="shqip">Shqip</option>
                                <option value="english">English</option>
                            </select>
                        </div>
                    </div>

                    <div style={styles.field}>
                        <label style={styles.label}>
                            Fotoja <span style={styles.required}>*</span>
                        </label>
                        <input
                            id="image-upload"
                            style={styles.fileInput}
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                        />
                        {imageFile && <span style={styles.fileName}>{imageFile.name}</span>}
                    </div>

                    <details style={styles.optionalBox}>
                        <summary style={styles.optionalSummary}>Optional grammar fields</summary>

                        <div style={styles.grid}>
                            <div style={styles.field}>
                                <label style={styles.label}>name_nom</label>
                                <input
                                    style={styles.input}
                                    value={nameNom}
                                    onChange={(e) => setNameNom(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>name_gen</label>
                                <input
                                    style={styles.input}
                                    value={nameGen}
                                    onChange={(e) => setNameGen(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>name_dat</label>
                                <input
                                    style={styles.input}
                                    value={nameDat}
                                    onChange={(e) => setNameDat(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>name_acc</label>
                                <input
                                    style={styles.input}
                                    value={nameAcc}
                                    onChange={(e) => setNameAcc(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>name_ins</label>
                                <input
                                    style={styles.input}
                                    value={nameIns}
                                    onChange={(e) => setNameIns(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>name_loc</label>
                                <input
                                    style={styles.input}
                                    value={nameLoc}
                                    onChange={(e) => setNameLoc(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>

                            <div style={styles.field}>
                                <label style={styles.label}>name_voc</label>
                                <input
                                    style={styles.input}
                                    value={nameVoc}
                                    onChange={(e) => setNameVoc(e.target.value)}
                                    placeholder="Optional"
                                />
                            </div>
                        </div>
                    </details>

                    {message && (
                        <div
                            style={{
                                ...styles.message,
                                ...(messageType === "success" ? styles.successMessage : styles.errorMessage),
                            }}
                        >
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            ...styles.button,
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                    >
                        {loading ? "Submitting..." : "Submit request"}
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        minHeight: "100vh",
        background:
            "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
        padding: "48px 16px",
    },
    card: {
        maxWidth: "820px",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.10)",
        border: "1px solid #e5e7eb",
    },
    header: {
        marginBottom: "28px",
    },
    title: {
        margin: 0,
        fontSize: "32px",
        lineHeight: 1.2,
        fontWeight: 700,
        color: "#111827",
    },
    subtitle: {
        margin: "10px 0 0 0",
        fontSize: "16px",
        color: "#6b7280",
    },
    form: {
        display: "grid",
        gap: "20px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px",
    },
    field: {
        display: "grid",
        gap: "8px",
    },
    label: {
        fontSize: "14px",
        fontWeight: 600,
        color: "#374151",
    },
    required: {
        color: "#dc2626",
    },
    input: {
        width: "100%",
        padding: "12px 14px",
        fontSize: "15px",
        borderRadius: "12px",
        border: "1px solid #d1d5db",
        outline: "none",
        background: "#fff",
        boxSizing: "border-box",
    },
    fileInput: {
        fontSize: "14px",
    },
    fileName: {
        fontSize: "13px",
        color: "#6b7280",
    },
    optionalBox: {
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "16px",
        background: "#f9fafb",
    },
    optionalSummary: {
        cursor: "pointer",
        fontWeight: 600,
        color: "#111827",
        marginBottom: "16px",
    },
    button: {
        border: "none",
        borderRadius: "14px",
        padding: "14px 18px",
        fontSize: "16px",
        fontWeight: 700,
        background: "#111827",
        color: "#ffffff",
        cursor: "pointer",
        opacity: 1,
    },
    message: {
        borderRadius: "12px",
        padding: "12px 14px",
        fontSize: "14px",
        fontWeight: 500,
    },
    successMessage: {
        background: "#ecfdf5",
        color: "#065f46",
        border: "1px solid #a7f3d0",
    },
    errorMessage: {
        background: "#fef2f2",
        color: "#991b1b",
        border: "1px solid #fecaca",
    },
};
import { useAtom } from "jotai";
import { userInfoAtom } from "../../atoms/userInfoAtoms";
import { handleUserInfo } from "./userInfoUtils";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const handleSubmit = async () => {
    try {
      const data = await handleUserInfo("http://localhost:8000", userInfo);
      console.log("✅ Server response:", data);
    } catch (err) {
      console.error("❌ Failed to submit user info", err);
    }
  };
  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded-2xl space-y-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold text-center">User Information</h2>

      {/* Age */}
      <div className="flex flex-col">
        <label htmlFor="age" className="mb-1 font-medium">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={userInfo.age}
          onChange={(e) =>
            setUserInfo({ ...userInfo, age: Number(e.target.value) })
          }
          className="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
          placeholder="Enter your age"
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Gender</label>
        <select
          value={userInfo.gender}
          onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}
          className="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
        >
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* Height */}
      <div className="flex flex-col">
        <label htmlFor="height" className="mb-1 font-medium">
          Height
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            id="height"
            value={userInfo.height}
            onChange={(e) =>
              setUserInfo({ ...userInfo, height: Number(e.target.value) })
            }
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
            placeholder="Enter your height"
          />
          <span className="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md">
            cm
          </span>
        </div>
      </div>

      {/* Weight */}
      <div className="flex flex-col">
        <label htmlFor="weight" className="mb-1 font-medium">
          Weight
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            id="weight"
            value={userInfo.weight}
            onChange={(e) =>
              setUserInfo({ ...userInfo, weight: Number(e.target.value) })
            }
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
            placeholder="Enter your weight"
          />
          <span className="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md">
            kg
          </span>
        </div>
      </div>

      {/* Body Fat % */}
      <div className="flex flex-col">
        <label htmlFor="bodyFat" className="mb-1 font-medium">
          Body Fat % (optional)
        </label>
        <input
          type="number"
          id="bodyFat"
          value={userInfo.bodyFat ?? ""}
          onChange={(e) =>
            setUserInfo({
              ...userInfo,
              bodyFat: e.target.value ? Number(e.target.value) : undefined,
            })
          }
          className="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
          placeholder="e.g. 15"
        />
      </div>

      {/* Fitness Level */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Current Fitness Level</label>
        <select
          value={userInfo.fitnessLevel}
          onChange={(e) =>
            setUserInfo({ ...userInfo, fitnessLevel: e.target.value })
          }
          className="p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded-md"
        >
          <option value="">Select level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
        </select>
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-md transition-colors"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default UserInfo;

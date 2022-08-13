import { SearchIcon, UsersIcon } from "@heroicons/react/outline";
import { FormEvent, useCallback, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

interface InputEventType extends FormEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface DateRangeSelectionType {
  selection: {
    endDate: Date;
    key: string;
    startDate: Date;
  };
}

export default function HeaderSearch() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const performSearch = useCallback(({ target }: InputEventType) => {
    setSearchKeyword(target.value);
    if (target.value.length > 2) {
      setShowBookingModal(true);
    } else setShowBookingModal(false);
  }, []);
  const handleSelect = useCallback(({ selection }: DateRangeSelectionType) => {
    setSelectionRange((prevSelectionRange) => ({
      ...prevSelectionRange,
      startDate: selection.startDate,
      endDate: selection.endDate,
    }));
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Start your search"
        className="flex-grow pl-5 transparent outline-none text-gray-600 placeholder-gray-400"
        onInput={performSearch}
        value={searchKeyword}
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      <div className="absolute top-24">
        {showBookingModal ? (
          <div className="bg-white">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#f87171"]}
              onChange={handleSelect}
            />

            <div className="flex items-center border-b mb-4 p-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5 mr-0" />
              <input
                type="number"
                min={1}
                value={numberOfGuests}
                onInput={({ target }: InputEventType) =>
                  setNumberOfGuests(parseInt(target.value))
                }
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>

            <div className="flex h-12">
              <button
                onClick={() => {
                  setShowBookingModal(false);
                  setSearchKeyword("");
                }}
                className="flex-grow text-gray-500"
              >
                Cancel
              </button>
              <button className="flex-grow text-red-400">Search</button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

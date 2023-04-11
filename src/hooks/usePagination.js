import { useState } from "react";


export const usePagination = (properties) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentProperties = properties.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(properties.length / recordsPerPage);

    return [nPages, currentPage, setCurrentPage, currentProperties];
}
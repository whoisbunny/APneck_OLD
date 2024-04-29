import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import Card from "../../components/ui/Card";
import {
  deleteProducts,
  getProducts,
  updateProduct,
} from "../../app/features/product/productSlice";
import { IoEye } from "react-icons/io5";
import { HiPencilSquare } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const COLUMNS = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (row) => {
        return (
          <div className="flex space-x-3 items-center text-left rtl:space-x-reverse">
            <div className="flex-none">
              <div className="h-10 w-10 rounded-full text-sm bg-[#E0EAFF] dark:bg-slate-700 flex flex-col items-center justify-center font-medium -tracking-[1px]">
                {row?.cell?.value.charAt(0) +
                  row?.cell?.value.charAt(row?.cell?.value.length - 1)}
              </div>
            </div>
            <div className="flex-1 font-medium text-sm leading-4 whitespace-nowrap">
              {row?.cell?.value.length > 20
                ? row?.cell?.value.substring(0, 20) + "..."
                : row?.cell?.value}
            </div>
          </div>
        );
      },
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: (row) => {
        return (
          <div className="flex space-x-3 items-center text-center">
            <img
              src={row?.cell?.value}
              alt="product image"
              className="h-16 w-16"
            />
          </div>
        );
      },
    },

    {
      Header: "Total Quantity",
      accessor: "quantity",
      Cell: (row) => {
        return (
          <div className="flex space-x-3 items-center text-center">
            <div className="flex-1 font-medium text-sm leading-4 whitespace-nowrap ">
              {row.cell?.value} PCS
            </div>
          </div>
        );
      },
    },

    {
      Header: "Price",
      accessor: "price",
      Cell: (row) => {
        return (
          <div className="flex space-x-3 items-center text-center rtl:space-x-reverse">
            <div className="flex-1 font-medium text-sm leading-4 whitespace-nowrap">
              &#x20B9; {row.cell?.value}
            </div>
          </div>
        );
      },
    },

    {
      Header: "action",
      accessor: "action",
      Cell: (row) => {
        let item = {
          name: "delete",
        };
        return (
          <>
            <div className="divide-y divide-slate-100 dark:divide-slate-800  ">
              {actions.map((item, i) => {
                return (
                  <>
                    <div
                      onClick={() => item.doit(row?.row?.original)}
                      className={`
                      
                      ${
                        item.name === "delete"
                          ? "bg-danger-500 text-danger-500 bg-opacity-30   hover:bg-opacity-100 hover:text-white"
                          : "hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50"
                      }
                w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm  last:mb-0 cursor-pointer 
                first:rounded-t last:rounded-b flex  space-x-2 items-center rtl:space-x-reverse  gap-2`}
                    >
                      {item.icon}
                      {item.name}
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      },
    },
  ];

  const actions = [
    {
      name: "view",
      icon: <IoEye />,
      doit: (item) => navigate(`/admin/product/${item._id}`),
    },
    {
      name: "edit",
      icon: <HiPencilSquare />,
      doit: (item) => dispatch(updateProduct(item)),
    },
    {
      name: "delete",
      icon: <FaRegTrashAlt />,
      doit: (item) => {
        dispatch(deleteProducts(item._id));

        setTimeout(() => {
          dispatch(getProducts());
        }, 300);
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => products, [products]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },

      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect
    );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   footerGroups,
  //   // page,
  //   nextPage,
  //   previousPage,
  //   canNextPage,
  //   canPreviousPage,
  //   pageOptions,
  //   state,
  //   gotoPage,
  //   pageCount,
  //   setPageSize,
  //   setGlobalFilter,
  //   prepareRow,
  // } = tableInstance;

  // const { globalFilter, pageIndex, pageSize } = state;
  return (
    <Card noborder className="m-4">
      <div className="md:flex justify-between items-center mb-6">
        <h4 className="card-title">Product List</h4>
      </div>

      <div className="overflow-x-auto -mx-6">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700"
            >
              <thead className=" bg-slate-100 dark:bg-slate-700 h-12">
                {headerGroups.map((headerGroup) => (
                  <>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <>
                          <th {...column.getHeaderProps()} className="table-th">
                            {column.render("Header")}
                          </th>
                        </>
                      ))}
                    </tr>
                  </>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
              >
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <>
                      <tr
                        {...row.getRowProps()}
                        className="h-12 even:bg-slate-100 dark:even:bg-slate-700 "
                      >
                        {row.cells.map((cell) => {
                          return (
                            <>
                              <td
                                {...cell.getCellProps()}
                                className="table-td px-5"
                              >
                                {cell.render("Cell")}
                              </td>
                            </>
                          );
                        })}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductList;

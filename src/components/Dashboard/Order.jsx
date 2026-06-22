


const Order = () => {

    return (
                 <div className="mt-6 card bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-lg">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
            {/* Table Body */}
                    <tr>
                      <td>#ORD-7245</td>
                      <td>John Smith</td>
                      <td>
                        <div className="badge badge-success">Completed</div>
                      </td>
                      <td>Mar 8, 2025</td>
                      <td>$125.00</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
    );
};

export default Order;
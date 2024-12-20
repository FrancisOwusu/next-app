import { Card } from "@/app/ui/dashboard/cards";
import  CardWrapper  from "@/app/ui/dashboard/cards";
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { fetchLatestInvoices, fetchCardData } from "../lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton,CardSkeleton } from "../ui/skeletons";
import RevenueChart from "../ui/dashboard/revenue-chart";
// import { Card } from "../ui/dashboard/cards";

export default async function Page() {
  // const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const cardData = await fetchCardData();
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={cardData.numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        <Card
          title="Total Invoices"
          value={cardData.numberOfInvoices}
          type="invoices"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        <Card
          title="Total Pending Invoices"
          value={cardData.totalPendingInvoices}
          type="pending"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        <Card
          title="Total Paid Invoices"
          value={cardData.totalPaidInvoices}
          type="collected"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart revenue={[]} />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices latestInvoices={[]} />
        </Suspense>
        <Suspense fallback={<CardWrapper />}>
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
